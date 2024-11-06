import { useState, useEffect } from "react";
import "./Write.css";

export default function Write() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publict, setPublict] = useState([]); // Cambio de posts a publict
  const [editIndex, setEditIndex] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editCommentIndex, setEditCommentIndex] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");

  useEffect(() => {
    try {
      const savedPublict = JSON.parse(localStorage.getItem("publict")) || [];
      setPublict(savedPublict);
    } catch (error) {
      console.error("Error al cargar las publicaciones:", error);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPublict = { title, content, image, comments: [] };

    let updatedPublict;
    if (editIndex !== null) {
      updatedPublict = [...publict];
      updatedPublict[editIndex] = newPublict;
      setEditIndex(null);
    } else {
      updatedPublict = [newPublict, ...publict];
    }

    setPublict(updatedPublict);
    localStorage.setItem("publict", JSON.stringify(updatedPublict));

    setTitle("");
    setContent("");
    setImage(null);
  };

  const handleEdit = (index) => {
    const publictToEdit = publict[index];
    setTitle(publictToEdit.title || "");
    setContent(publictToEdit.content || "");
    setImage(publictToEdit.image || null);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPublict = publict.filter((_, i) => i !== index);
    setPublict(updatedPublict);
    localStorage.setItem("publict", JSON.stringify(updatedPublict));
  };

  const handleAddComment = (publictIndex) => {
    const updatedPublict = [...publict];
    const publictItem = updatedPublict[publictIndex];

    // Agregar el nuevo comentario al array de comentarios de la publicación
    publictItem.comments.push(newComment);

    setPublict(updatedPublict);
    localStorage.setItem("publict", JSON.stringify(updatedPublict));
    setNewComment("");
  };

  const handleEditComment = (publictIndex, commentIndex) => {
    const commentToEdit = publict[publictIndex].comments[commentIndex];
    setEditCommentText(commentToEdit);
    setEditCommentIndex({ publictIndex, commentIndex });
  };

  const handleSaveEditedComment = () => {
    const updatedPublict = [...publict];
    const { publictIndex, commentIndex } = editCommentIndex;

    // Actualizar el comentario editado
    updatedPublict[publictIndex].comments[commentIndex] = editCommentText;

    setPublict(updatedPublict);
    localStorage.setItem("publict", JSON.stringify(updatedPublict));
    setEditCommentIndex(null);
    setEditCommentText("");
  };

  const handleDeleteComment = (publictIndex, commentIndex) => {
    const updatedPublict = [...publict];
    updatedPublict[publictIndex].comments = updatedPublict[publictIndex].comments.filter(
      (_, i) => i !== commentIndex
    );

    setPublict(updatedPublict);
    localStorage.setItem("publict", JSON.stringify(updatedPublict));
  };

  return (
    <div className="write">
      {image && (
        <div className="writeImg">
          <img src={image} alt="Imagen seleccionada" />
        </div>
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Título"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Publica tu historia..."
            type="text"
            className="writeInput writeText"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          {editIndex !== null ? "Guardar Cambios" : "Publicar"}
        </button>
      </form>

      {/* Muestra las publicaciones guardadas */}
      <div className="publict">
        {publict.map((publictItem, index) => (
          <div key={index} className="po">
            {publictItem.image && (
              <img src={publictItem.image} alt="Imagen de la publicación" />
            )}
            <div>
              <div className="title-coments">
                <h2>{publictItem.title}</h2>
                <p>{publictItem.content}</p>
              </div>
              <div className="button-coment">
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </div>
            </div>
            {/* Mostrar los comentarios */}
            <div className="comments">
              <h3>Comentarios</h3>
              {publictItem.comments.length > 0 ? (
                publictItem.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment">
                    {editCommentIndex &&
                    editCommentIndex.publictIndex === index &&
                    editCommentIndex.commentIndex === commentIndex ? (
                      <div>
                        <input
                          type="text"
                          value={editCommentText}
                          onChange={(e) => setEditCommentText(e.target.value)}
                        />
                        <div>
                          <button onClick={handleSaveEditedComment}>
                            Guardar
                          </button>
                          <button onClick={() => setEditCommentIndex(null)}>
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="edit-commet">
                        <dir className="edit-commet-msj">
                          <p>- {comment}</p>
                        </dir>
                        <div className="edit-button">
                          <button
                            onClick={() =>
                              handleEditComment(index, commentIndex)
                            }
                          >
                            Editar
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteComment(index, commentIndex)
                            }
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No hay comentarios aún.</p>
              )}
            </div>

            {/* Formulario para agregar un nuevo comentario */}
            <div className="commentForm">
              <input
                type="text"
                placeholder="Escribe un comentario..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={() => handleAddComment(index)}
                disabled={!newComment.trim()}
              >
                Comentar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
