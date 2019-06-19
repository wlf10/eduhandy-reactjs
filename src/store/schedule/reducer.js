const initialState = {
  events: [

    {
      id: 100,
      title:'МДК.02.02 ЭОИС Абдулалимова Э.И. 414',
      desc: 'МДК.02.02 ЭОИС',
      start: new Date(2019, 5, 17, 8, 30, 0, 0, 0),
      end: new Date(2019, 5, 17, 10, 0, 0, 0, 0),
      group: 'ИС-41',
      teacher: 'Абдулалимова Э.И.',
      subject: 'МДК.02.02 ЭОИС',
      room: '414'
    },
    {
      id: 101,
      title:'МДК.02.02 ЭОИС Абдулалимова Э.И. 414',
      desc: 'МДК.02.02 ЭОИС',
      start: new Date(2019, 5, 17, 10, 20, 0, 0, 0),
      end: new Date(2019, 5, 17, 11, 50, 0, 0, 0),
      group: 'ИС-41',
      teacher: 'Абдулалимова Э.И.',
      subject: 'МДК.02.02 ЭОИС',
      room: '414'
    },
    {
      id: 102,
      title:'МДК.02.02 УП Шушарина С.С. 220',
      desc: 'МДК.02.02 УП',
      start: new Date(2019, 5, 17, 12, 10, 0, 0, 0),
      end: new Date(2019, 5, 17, 13, 40, 0, 0, 0),
      group: 'ИС-41',
      teacher: 'Шушарина С.С.',
      subject: 'МДК.02.02 УП',
      room: '220'
    },  
    {
      id: 103,
      title:'Ин.(нем) язык / Шатрова Н.В. / 230',
      desc: 'Ин.(нем) язык',
      start: new Date(2019, 5, 17, 13, 50, 0, 0, 0),
      end: new Date(2019, 5, 17, 15, 20, 0, 0, 0),
      group: 'ИС-41',
      teacher: 'Шатрова Н.В.',
      subject: 'Ин.(нем) язык',
      room: '230'
    },
  
    {
      id: 2,
      title:'ОАиП / Чумаковская Т.И. / 313',
      desc: 'ОАиП',
      start: new Date(2019, 5, 19, 10, 30),
      end: new Date(2019, 5, 19, 12, 30),
      group: 'ИС-41',
      teacher: 'Абдулалимова Э.И.',
      subject: 'МДК.02.02 ЭОИС',
      room: '414'
    },
    {
      id: 3,
      title:'МДК.01.01 / Иванова Т.И. / 217',
      desc: 'МДК.01.01',
      start: new Date(2019, 5, 20, 10, 30),
      end: new Date(2019, 5, 20, 11, 50),
      group: 'ИС-41',
      teacher: 'Абдулалимова Э.И.',
      subject: 'МДК.02.02 ЭОИС',
      room: '414'
    },
    /*{
      id: 14,
      title: 'Now',
      start: new Date(new Date().setHours(new Date().getHours())),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },*/
    
  ]
};

export default function subjects(state = initialState, action) {
  return state;
}