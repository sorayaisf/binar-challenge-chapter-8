import React from "react";
import './styles/Table.css';

export default function Table({ data, handleEdit, handleDelete }) {
    return (
        <div className="list-group container">
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Level</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {data.map((contact, index) => {
                        return (
                            <tbody key={index} >
                                <tr>
                                    <th scope="row">{contact.username}</th>
                                    <td>{contact.email}</td>
                                    <td>{contact.experience}</td>
                                    <td>{contact.lvl}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleEdit(contact.id)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(contact.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}
