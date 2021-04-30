import React from "react";

const Footer = ({ activeAmount, finishedAmount }) => {
  return (
    <footer className="footer">
      <section className="footer__tasks">
        <p>Active tasks: {activeAmount}</p>
        <p>Finished tasks: {finishedAmount}</p>
      </section>
      <section className="footer__credits">
        Kanban Board by Tim Sagitov, 2021
      </section>
    </footer>
  );
};

export default Footer;
