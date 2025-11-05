import { useState } from "react"
import axios from "axios";


const ReviewForm = ({ idProp, onReviewAdded }) => {

    // dichiaro lo stato iniziale standardizzato
    const initialValues = {
        name: "",
        text: "",
        vote: 1
    }

    // settiamo stato del componente
    const [formData, setFormData] = useState(initialValues);

    const handleChange = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const api = `http://localhost:3000/api/movies/${idProp}/reviews`;

    const handleSubmit = e => {
        e.preventDefault();

        axios.post(api, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // settiamo il form a valori iniziali
                setFormData(initialValues)
                onReviewAdded()
            })
            .catch((err) => console.log(err))
    }

    return (
        <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
            <h4 className="mb-3 text-center">Lascia una recensione</h4>

            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo nome"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Voto (da 1 a 5)</label>
                <input
                    type="number"
                    className="form-control"
                    name="vote"
                    value={formData.vote}
                    onChange={handleChange}
                    placeholder="Inserisci un voto"
                    min="1"
                    max="5"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Commento</label>
                <textarea
                    className="form-control"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Scrivi la tua recensione..."
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Invia recensione
            </button>
        </form>

    )
}

export default ReviewForm