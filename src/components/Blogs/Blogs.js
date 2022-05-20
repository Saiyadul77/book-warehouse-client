import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const Blogs = () => {
    return (
        <div className='w-75 mx-auto'>
            <div>
                <h1 className='text-center text-bold my-4'>Ask and Answer</h1>
            </div>
            <div>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the Difference between javascript and nodejs?</Accordion.Header>
                        <Accordion.Body>
                            <h4> Ans: Difference between javascript and nodejs</h4>
                            <h5> JavaScript</h5>
                            <ul>
                                <li>JavaScipt is a programming language. It runnig in any web browser with proper browser engine.</li>
                                <li>Mainly using for any client side activity for a web application</li>
                                <li>JavaScript running any engine like</li>
                                <li>Javascript is used in frontend development.</li>
                                <li>Javascript can only be run in the browsers.</li>

                            </ul>
                            <h5> Nodejs</h5>
                            <ul>
                                <li>It is an interpreter and environment for JavaScript with some specific useful libraries which javaScript programming can use separately.</li>
                                <li>It is mostly used on the server-side.</li>
                                <li>Node Js only run in V8 engine which mainly using by google chrome and java script program which will be written under this Node JS will be always run in V8 engine.</li>
                                <li>Nodejs is used in server-side development.</li>
                                <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                        <Accordion.Body>
                            <h5> Node JS</h5>
                            <p>Nodejs is a Javascript engine that you can write any application you want with. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                            <h5> Mongodb</h5>
                            <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is the Differences between sql and nosql databases?</Accordion.Header>
                        <Accordion.Body>
                            <h4> Ans: Differences between sql and nosql databases.</h4>
                            <h5> sql</h5>
                            <ul>
                                <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
                                <li>These databases have fixed or static or predefined schema</li>
                                <li>These databases are not suited for hierarchical data storage.</li>
                                <li>These databases are best suited for complex queries.</li>
                                <li>Vertically Scalable.</li>
                                <li>Follows ACID property.</li>

                            </ul>
                            <h5> nosql</h5>
                            <ul>
                                <li>Non-relational or distributed database system.</li>
                                <li>They have dynamic schema.</li>
                                <li>These databases are best suited for hierarchical data storage.</li>
                                <li>These databases are not so good for complex queries.</li>
                                <li>Horizontally scalable.</li>
                                <li>Follows CAP(consistency, availability, partition tolerance).</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            <h4> Ans: The purpose of jwt</h4>
                            
                            <p>JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>
                            <h4>JSON Web Tokens work</h4>
                            <p>In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.</p><br />
                            <p>Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;