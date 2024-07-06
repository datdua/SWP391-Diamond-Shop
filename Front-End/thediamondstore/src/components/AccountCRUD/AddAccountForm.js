import React, { useState } from "react";
import { createAccount } from "../../api/accountCrud"; // Adjust the import path as necessary
import { Form, Button } from "react-bootstrap";

function AddAccountForm() {
    const [account, setAccount] = useState({
        accountName: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setAccount({ ...account, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createAccount(account);
            console.log(response);
            setMessage("Tạo mới tài khoản thành công");
        } catch (error) {
            console.error(error);
            setMessage("Tạo mới tài khoản thất bại");
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {Object.keys(account).map((key) => (
                    <Form.Group controlId={key} key={key}>
                        <Form.Label>{key}</Form.Label>
                        <Form.Control
                            type="text"
                            name={key}
                            value={account[key]}
                            onChange={handleChange}
                            placeholder={key}
                            required={key !== "phoneNumber"}
                        />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit">
                    Create account
                </Button>
            </Form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AddAccountForm;