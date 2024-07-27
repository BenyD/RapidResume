import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why is a resume builder better than a resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generate a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          RapidResume saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets RapidResume apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          Other than RapidResume, there are some great free resume builders out
          there, e.g. <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However, RapidResume
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. RapidResume is designed specifically for the Indian job market
            and best practices.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, RapidResume intentionally only offers
          options that are aligned with Indian best practices. For example, it
          excludes the option to add a profile picture to avoid bias and
          discrimination. It offers only the core sections, e.g. profile, work
          experience, education, and skills, while omitting unnecessary sections
          like references. Additionally, RapidResume only offers a top-down
          single column resume design as opposed to a two-column design, because
          single column design works best for ATS. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. RapidResume is super privacy focused.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, RapidResume believes that resume data should
          remain private and accessible only on the user’s local machine.
          Therefore, RapidResume doesn’t require sign up to use the app, and all
          inputted data is stored in the user’s browser that only the user has
          access to.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created RapidResume and why?",
    answer: (
      <p>
        RapidResume was created by{" "}
        <Link href="https://www.linkedin.com/in/benydishon/">
          Beny Dishon K
        </Link>{" "}
        as a weekend project for college. This was developed on top of{" "}
        <Link href="https://github.com/BenyD/RapidResume">OpenResume</Link>.
        RapidResume is a more advanced and modern version of OpenResume and the
        main difference is that it is optimised for building resume for jobs in
        India.
      </p>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
