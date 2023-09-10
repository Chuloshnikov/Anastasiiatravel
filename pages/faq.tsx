import FAQItem from '../components/FAQItem';
import styles from '../styles/cinzel.module.css';

const faqData = [
  {
    question: 'Чи може вартість туру змінюватись?',
    answer: 'Ні, ми встановлюємо фіксовану вартість туру для вашої зручності, усі деталі вже враховані',
  },
  {
    question: 'Чи можна вам довіряти?',
    answer: 'Так, ви цілком можете довірити нам свій час та гроші, наша репутація для нас на першому місці',
  },
  {
    question: 'Чи може програма туру змінюватись?',
    answer: 'Так, все залежить від погодних умов та побажань групи з якою ми подорожуємо',
  },
  {
    question: 'Чи можливо забронювати тур без оплати ?',
    answer: 'Нажаль забронювати тур без оплати неможливо, при внесенні передоплати ви бронюєте за собою місце у групі',
  },
  {
    question: 'Чи допоможете ви дібратися мені з України та купити всі необхідні квитки?',
    answer: 'Так, ми допомагаємо нашим клієнтам на всіх етапах подорожі',
  },
  {
    question: 'Чи можу я дізнатися деталі туру?',
    answer: 'Так, ви можете звʼязатися з нами будь-яким зручним способом за контактами які вказані на сайті',
  },
  {
    question: 'Які способи оплати доступні ?',
    answer: 'Передоплату можна надіслати на картку українського банку, другу частину оплати можна сплатити готівкою при зустрічі',
  },
  {
    question: 'Мене цікавить приватний тур, тільки для мене та моєї сімʼї, чи можливо створити такий тур за моїм запитом ?',
    answer: 'Так, звичайно. Така послуга існує',
  },
  {
    question: 'Якщо в мене змінюються плани і я хочу скасувати свою участь у турі, за яких обставин це можливо ?',
    answer: 'Якщо до початку туру лишається менше 3 тижнів і немає змоги в такий короткий час знайти нового учасника, то нажаль передоплату повернути неможливо',
  },
  {
    question: 'Як щодо авіа квитків, чи можливо повернути їх вартість ?',
    answer: 'Нажаль вартість авіа повернути неможливо',
  },
];

const IndexPage = () => {
  return (
    <div className='bg-[#749CBA] w-full h-full pt-[10%] pb-[10%]'>
      <div
      className='xs: p-10 mdl:p-2'
      >
        <div
        className='text-center my-8'
        >
          <h3
            className={`${styles.cinzelFont} font-base leading-tight tracking-widest xs:text-[22px] md:text-[44px] xl:text-[62px] text-yellow-500 mb-8`}
            >
            Відповіді на часті запитання
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