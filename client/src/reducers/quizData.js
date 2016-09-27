export default {
  quizData: [
    {
      title: 'Transportation',
      question: 'How would you like to travel? Select your preferred mode of transportation:',
      options: [
        {
          id: 1,
          option: 'Airplane',
          imageUrl: '../assets/images/airplane.png'
        },
        {
          id: 2,
          option: 'Car',
          imageUrl: '../assets/images/car.png'
        },
        {
          id: 3,
          option: 'Train',
          imageUrl: '../assets/images/train.png'
        }
      ]
    },
    {
      title: 'Lodging',
      question: 'Where would you like to stay? Select one of the following lodging options:',
      options: [
        {
          id: 1,
          option: 'Hotel',
          imageUrl: '../assets/images/hotel.png'
        },
        {
          id: 2,
          option: 'Hostel',
          imageUrl: '../assets/images/hostel.png'
        },
        {
          id: 3,
          option: 'Airbnb',
          imageUrl: '../assets/images/airbnb.png'
        }
      ]
    },
    {
      title: 'Activities',
      question: 'What do you like to do? Select one of the following activities:',
      options: [
        {
          id: 1,
          option: 'Hiking',
          imageUrl: '../assets/images/hiking.png'
        },
        {
          id: 2,
          option: 'Beach',
          imageUrl: '../assets/images/beach.png'
        },
        {
          id: 3,
          option: 'Music Festivals',
          imageUrl: '../assets/images/festival.png'
        },
      ]
    }
  ],
  quizAnswers: [],
  questionIndex: 0
};
