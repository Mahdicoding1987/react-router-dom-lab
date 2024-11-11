// src/components/MailboxDetails.jsx
import React from "react";
import { useParams } from "react";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <div>Mailbox Not Found!</div>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {selectedBox._id}</p>
      <p>Boxholder Name: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;