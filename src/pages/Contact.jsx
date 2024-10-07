export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    console.log(formData);
  };

  return (
    <section className="flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl mb-4 text-center">Contato</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
            required
          />
          <button type="submit" className="w-full bg-indigo-300 dark:bg-indigo-900 text-white p-2 rounded">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
