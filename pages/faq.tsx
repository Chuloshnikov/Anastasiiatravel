import FAQItem from '../components/FAQItem';
import styles from '../styles/cinzel.module.css';

const faqData = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  // ...другие вопросы и ответы...
];

const IndexPage = () => {
  return (
    <div className='bg-[#749CBA] w-full h-full pt-[10%] pb-[10%]'>
      <div
      className='p-2'
      >
        <div
        className='text-center my-8'
        >
          <h3
            className={`${styles.cinzelFont} font-base tracking-widest xs:text-[32px] md:text-[44px] xl:text-[62px] text-yellow-500 mb-8`}
            >
            Відповіді на частіші запитання
          </h3>
        </div>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;