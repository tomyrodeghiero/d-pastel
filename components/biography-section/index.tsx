import React from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }: any) => (
    <div className={`border-b ${isOpen ? 'border-t' : ''} py-4`}>
        <button
            className="flex justify-between items-center w-full text-left"
            onClick={onToggle}
        >
            <span className="font-medium text-gray-700">{question}</span>
            <span>
                {isOpen ? '-' : '+'}
            </span>
        </button>
        {isOpen && (
            <div className="mt-2 pl-4 pr-2 text-gray-600">
                {answer}
            </div>
        )}
    </div>
);

const Accordion = ({ items }: any) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const handleToggle = (index: any) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="space-y-2">
            {items.map((item: any, index: number) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={index === openIndex}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

const BiographySection = () => {
    const faqItems = [
        {
            question: 'Why are you a lamp designer?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.'
        },
        {
            question: 'How to Easy Successful Projects?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.'
        },
        {
            question: 'International Trade Experience?',
            answer: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.'
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Biografía</h1>
            <p className='font-family-jost text-gray-500 '>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which don't look even slightly believable.
                <br /><br />
                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.
            </p>
            <div className="bg-white shadow-md rounded-lg p-6">
                <Accordion items={faqItems} />
            </div>
        </div>
    );
};

export default BiographySection;