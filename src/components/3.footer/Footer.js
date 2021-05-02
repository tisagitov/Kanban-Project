import React from "react";

const Footer = ({ activeAmount, finishedAmount }) => {
  return (
    <footer className="footer--color">
      <div className="footer container">
        <section className="footer__tasks">
          <p className="footer__task">Active tasks: {activeAmount}</p>
          <p className="footer__task">Finished tasks: {finishedAmount}</p>
        </section>
        <section className="footer__credits">
          Kanban Board by Tim Sagitov, 2021
        </section>
      </div>
    </footer>
  );
};

export default Footer;
