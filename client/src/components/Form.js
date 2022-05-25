import './styles/Form.css';
import Table from "./Table";
import { useState } from "react";
import { uid } from "uid";

function Form() {
    const [contacts, setContacts] = useState([
        {
            username: "John",
            email: "john@yahoo.com",
            experience: "1000",
            lvl: "600",
        },
    ])

    const [isUpdate, setIsUpdate] = useState({ id: null, status: false })

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        experience: "",
        lvl: "",
    });

    function handleChange(e) {
        const data = { ...formData }
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const data = [...contacts];


        if (formData.username === "") {
            return false;
        }
        if (formData.email === "") {
            return false;
        }
        if (formData.experience === "") {
            return false;
        }
        if (formData.lvl === "") {
            return false;
        }

        if (isUpdate.status) {
            data.forEach((contact) => {
                if (contact.id === isUpdate.id) {
                    contact.username = formData.username;
                    contact.email = formData.email;
                    contact.experience = formData.experience;
                    contact.lvl = formData.lvl;
                }
            })
        } else {
            data.push({
                id: uid(), username: formData.username,
                email: formData.email,
                experience: formData.experience,
                lvl: formData.lvl,
            })
        }
        setIsUpdate({ id: null, status: false })
        setContacts(data)
        setFormData({ username: "", email: "", experience: "", lvl: "" })
    }

    function handleEdit(id) {
        const data = [...contacts];
        const foundData = data.find(contact => contact.id === id)
        setFormData({
            username: foundData.username,
            email: foundData.email,
            experience: foundData.experience,
            lvl: foundData.lvl,
        })
        setIsUpdate({ id: id, status: true })
    }

    function handleDelete(id) {
        const data = [...contacts];
        const filteredData = data.filter(contact => contact.id !== id);
        setContacts(filteredData)
    }

    return (
        <div className="App">
            <form className="form-controls px-3 py-4">
                <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input
                        onChange={(e) => handleChange(e, "username")}
                        type="text"
                        className="form-control"
                        name="username"
                        value={formData.username}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Email</label>
                    <input
                        onChange={(e) => handleChange(e, "email")}
                        type="text"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Experience</label>
                    <input
                        onChange={(e) => handleChange(e, "experience")}
                        type="text"
                        className="form-control"
                        name="experience"
                        value={formData.experience}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Level</label>
                    <input
                        onChange={(e) => handleChange(e, "lvl")}
                        type="text"
                        className="form-control"
                        name="lvl"
                        value={formData.lvl}
                        required
                    />
                </div>
                <div>
                    <button
                        type="button"
                        onClick={(e) => handleSubmit(e)}
                        className="btn btn-warning mt-3"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <Table
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                data={contacts} />
        </div>
    );
}

export default Form;