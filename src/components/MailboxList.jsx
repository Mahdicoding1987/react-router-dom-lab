// src/components/MailboxList.jsx
import React from "react";
import { Link } from "react";

const MailboxList = ({ mailboxes }) => {
  return (
    <section>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>Box {mailbox._id}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MailboxList;
