import { useState } from "react";

function SendMessage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    theme: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="text-center mt-16" onSubmit={handleSubmit}>
      <h1 className="text-[#120F2D] text-2xl font-semibold">Yordam kerakmi</h1>
      <form action="" className="text-center pb-12 mx-6">
        <div className="flex justify-between">
          <input
            type="text"
            name="name"
            placeholder="Ismingizni kiriting"
            value={form.name}
            onChange={handleChange}
            className="w-full mr-2 px-4 py-2 border-[1px] rounded mt-4 bg-[#ECF4FF] border-[#ECF4FF]"
          />
          <input
            type="email"
            name="email"
            placeholder="Emailingizni kiriting"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-[1px] rounded mt-4 bg-[#ECF4FF] border-[#ECF4FF]"
          />
        </div>
        <input
          type="text"
          name="theme"
          placeholder="Mavzuni kiriting"
          value={form.theme}
          onChange={handleChange}
          className="w-full px-4 py-2 border-[1px] rounded mt-4 bg-[#ECF4FF] border-[#ECF4FF]"
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="Xabaringizni kiriting"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 pt-2 pb-20 border-[1px] rounded mt-4 bg-[#ECF4FF] border-[#ECF4FF]"
        />
        <br />
        <button
          type="submit"
          className="w-full px-4 py-2 border-[1px] rounded mt-4 bg-[#2878EB] border-[#2878EB] text-[1.1rem] text-white font-semibold"
        >
          {"Jo'natish"}
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
