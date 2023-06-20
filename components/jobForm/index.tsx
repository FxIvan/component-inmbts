import React from "react";
import styles from "./styles.module.scss";

const JobForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const target = event.target;

    const data = {
      fullName: target.fullName.value,
      phone: target.phone.value,
      jobPosition: target.jobPosition.value,
      splitTasks: target.splitTasks.value,
      attachFile: target.attachFile.value,
    };

    console.log(data);
  };

  const inputForm: {
    type: string;
    idLabel: string;
    nameLabel: string;
    nameValue: string;
  }[] = [
    {
      type: "text",
      nameLabel: "Nombre y Apellido*",
      idLabel: "full_name",
      nameValue: "fullName",
    },
    {
      type: "text",
      nameLabel: "Telefono*",
      idLabel: "telephone",
      nameValue: "phone",
    },
  ];

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        {/*Nombre y Apellido */}
        <div className="relative">
          <input
            type="text"
            id="full_name"
            name="fullName"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  text-black  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b border-b-slate-300"
            placeholder=" "
          />
          <label
            htmlFor="full_name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Nombre y Apellido*
          </label>
        </div>
        {/*Telefono */}
        <div className="relative">
          <input
            type="text"
            id="telephone"
            name="phone"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  text-black  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b border-b-slate-300"
            placeholder=" "
          />
          <label
            htmlFor="telephone"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Telefono*
          </label>
        </div>
        {/*¿En qué puesto encajarías mejor?* */}
        <div className="relative">
          <input
            type="text"
            id="jobPosition"
            name="jobPosition"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  text-black  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b border-b-slate-300"
            placeholder=" "
          />
          <label
            htmlFor="jobPosition"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            ¿En qué puesto encajarías mejor?*
          </label>
        </div>
        {/*Si pudieras dividir cualquier cosa... ¿qué sería?*/}
        <div className="relative">
          <input
            type="text"
            id="splitTasks"
            name="splitTasks"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm  text-black  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border-b border-b-slate-300"
            placeholder=" "
          />
          <label
            htmlFor="splitTasks"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Si pudieras dividir cualquier cosa... ¿qué sería?
          </label>
        </div>
        {/*¿Quieres adjuntarnos algo? */}
        <div className="py-2">
          <label
            className="text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            htmlFor="file_input"
          >
            ¿Quieres adjuntarnos algo?
          </label>
          <input
            className="my-2 w-full lg:w-1/4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none py-2 px-3 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            name="attachFile"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-9 py-2.5 rounded-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default JobForm;
