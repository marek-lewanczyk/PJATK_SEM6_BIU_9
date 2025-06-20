import React from "react";
import { Link, Outlet } from "react-router";

export function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>This is the contact page of our application.</p>
      <nav className="nav">
        <Link to="pl">Polish</Link>
        <Link to="de">German</Link>
        <Link to="us">English</Link>
      </nav>
      <Outlet />
    </>
  );
}

export function ContactPL() {
  return (
    <>
      <h1>Kontakt</h1>
      <p>To jest strona kontaktowa naszej aplikacji.</p>
    </>
  );
}

export function ContactUS() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>This is the contact us page of our application.</p>
    </>
  );
}

export function ContactDE() {
  return (
    <>
      <h1>Kontaktieren Sie uns</h1>
      <p>Dies ist die Kontaktseite unserer Anwendung.</p>
    </>
  );
}
