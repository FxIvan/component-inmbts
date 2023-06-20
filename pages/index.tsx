import FAQAccordion from "src/components/FAQAccordion";
import JobForm from "src/components/jobForm";

const HomePage = () => {
  const arrayFAQ: { question: string; answer: string }[] = [
    {
      question: "Nueva forma de inversión",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci vitae risus rhoncus consectetur. Sed ut dignissim velit. Cras accumsan ultrices elit sodales aliquam. Nullam ornare, nulla ornare ultrices congue, nisi mi eleifend tellus, in tincidunt mauris tellus et leo. Praesent pulvinar, augue dignissim imperdiet vulputate, lacus orci lacinia ligula, eu commodo nisi tellus eget quam. Fusce porttitor ex sed diam mattis aliquet. Proin dignissim erat id viverra malesuada. Sed semper libero et nulla volutpat vulputate. Proin suscipit metus in massa consectetur maximus. Vestibulum dapibus tincidunt egestas. Fusce sagittis elementum tempus. Nunc maximus mauris nec mauris ultrices sollicitudin.",
    },
    {
      question: "Liquidez mejorada",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci vitae risus rhoncus consectetur. Sed ut dignissim velit. Cras accumsan ultrices elit sodales aliquam. Nullam ornare, nulla ornare ultrices congue, nisi mi eleifend tellus, in tincidunt mauris tellus et leo. Praesent pulvinar, augue dignissim imperdiet vulputate, lacus orci lacinia ligula, eu commodo nisi tellus eget quam. Fusce porttitor ex sed diam mattis aliquet. Proin dignissim erat id viverra malesuada. Sed semper libero et nulla volutpat vulputate. Proin suscipit metus in massa consectetur maximus. Vestibulum dapibus tincidunt egestas. Fusce sagittis elementum tempus. Nunc maximus mauris nec mauris ultrices sollicitudin.",
    },
    {
      question: "Mayor transparencia",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci vitae risus rhoncus consectetur. Sed ut dignissim velit. Cras accumsan ultrices elit sodales aliquam. Nullam ornare, nulla ornare ultrices congue, nisi mi eleifend tellus, in tincidunt mauris tellus et leo. Praesent pulvinar, augue dignissim imperdiet vulputate, lacus orci lacinia ligula, eu commodo nisi tellus eget quam. Fusce porttitor ex sed diam mattis aliquet. Proin dignissim erat id viverra malesuada. Sed semper libero et nulla volutpat vulputate. Proin suscipit metus in massa consectetur maximus. Vestibulum dapibus tincidunt egestas. Fusce sagittis elementum tempus. Nunc maximus mauris nec mauris ultrices sollicitudin.",
    },
    {
      question: "Reducción de costos",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci vitae risus rhoncus consectetur. Sed ut dignissim velit. Cras accumsan ultrices elit sodales aliquam. Nullam ornare, nulla ornare ultrices congue, nisi mi eleifend tellus, in tincidunt mauris tellus et leo. Praesent pulvinar, augue dignissim imperdiet vulputate, lacus orci lacinia ligula, eu commodo nisi tellus eget quam. Fusce porttitor ex sed diam mattis aliquet. Proin dignissim erat id viverra malesuada. Sed semper libero et nulla volutpat vulputate. Proin suscipit metus in massa consectetur maximus. Vestibulum dapibus tincidunt egestas. Fusce sagittis elementum tempus. Nunc maximus mauris nec mauris ultrices sollicitudin.",
    },
    {
      question: "Diversificación de cartera",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis orci vitae risus rhoncus consectetur. Sed ut dignissim velit. Cras accumsan ultrices elit sodales aliquam. Nullam ornare, nulla ornare ultrices congue, nisi mi eleifend tellus, in tincidunt mauris tellus et leo. Praesent pulvinar, augue dignissim imperdiet vulputate, lacus orci lacinia ligula, eu commodo nisi tellus eget quam. Fusce porttitor ex sed diam mattis aliquet. Proin dignissim erat id viverra malesuada. Sed semper libero et nulla volutpat vulputate. Proin suscipit metus in massa consectetur maximus. Vestibulum dapibus tincidunt egestas. Fusce sagittis elementum tempus. Nunc maximus mauris nec mauris ultrices sollicitudin.",
    },
  ];

  return (
    <div className="my-5">
      {arrayFAQ.map((item, index) => (
        <FAQAccordion
          key={index}
          question={item.question}
          answer={item.answer}
          color="text-black"
        />
      ))}
      <JobForm />
    </div>
  );
};

export default HomePage;
