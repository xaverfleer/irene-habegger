import skinAndStown from '../static/img/black-02-Schale-und-Stein.jpg'
import bark from '../static/img/black-03-Rinde.jpg'
import hedge01 from '../static/img/hedge-01.jpg'
import hedge03 from '../static/img/hedge-03.jpg'
import hedge05 from '../static/img/hedge-05.jpg'
import hedge06 from '../static/img/hedge-06.jpg'
import hedge07 from '../static/img/hedge-07.jpg'
import hedge08 from '../static/img/hedge-08.jpg'
import object01a from '../static/img/object-01a.jpg'
import object01 from '../static/img/object-01.jpg'
import object05 from '../static/img/object-05.jpg'
import object06 from '../static/img/object-06.jpg'
import object08 from '../static/img/object-08.jpg'
import object12 from '../static/img/object-12.jpg'
import portrait01Mike from '../static/img/portrait-01-Mike.jpg'
import portrait02Sascha from '../static/img/portrait-02-Sascha.jpg'
import portrait03Selin from '../static/img/portrait-03-Selin.jpg'
import portrait04Joel from '../static/img/portrait-04-Joel.jpg'
import portrait08Floyd from '../static/img/portrait-08-Floyd.jpg'
import portrait09MarcoII from '../static/img/portrait-09-Marco-II.jpg'
import portrait10Xaver from '../static/img/portrait-10-Xaver.jpg'
import wall01 from '../static/img/wall-01.jpg'
import wall02 from '../static/img/wall-02.jpg'
import wall03 from '../static/img/wall-03.jpg'

const appData = {
  wall: {
    title: 'Irene Habegger | Wall',
    imgs: [
      {
        title: 'Wall 1',
        src: wall01,
        technique: 'acrylic, oil and coal on canvas',
        size: '155 x 100 cm',
        year: '2017',
      },
      {
        title: 'Wall 2',
        src: wall02,
        technique: 'acrylic, oil and coal on canvas',
        size: '155 x 100 cm',
        year: '2017',
      },
      {
        title: 'Wall 3',
        src: wall03,
        technique: 'acrylic, oil and coal on canvas',
        size: '155 x 100 cm',
        year: '2017',
      },
    ],
  },
  portraits: {
    title: 'Irene Habegger | Selection series',
    imgs: [
      {
        title: 'Mike',
        src: portrait01Mike,
        technique: 'oil on canvas',
        size: '30 x 30 cm',
        year: '2017',
      },
      {
        title: 'Sascha',
        src: portrait02Sascha,
        technique: 'oil on canvas',
        size: '30 x 30 cm',
        year: '2017',
      },
      {
        title: 'Selin',
        src: portrait03Selin,
        technique: 'oil on canvas',
        size: '30 x 30 cm',
        year: '2017',
      },
      {
        title: 'Joël',
        src: portrait04Joel,
        technique: 'oil on canvas',
        size: '30 x 30 cm',
        year: '2017',
      },
      {
        title: 'Floyd',
        src: portrait08Floyd,
        technique: 'oil on canvas',
        size: '34 x 34 cm',
        year: '2017',
      },
      {
        title: 'Marco II',
        src: portrait09MarcoII,
        technique: 'oil on canvas',
        size: '30 x 24 cm',
        year: '2017',
      },
      {
        title: 'Xaver',
        src: portrait10Xaver,
        technique: 'oil on canvas',
        size: '40 x 30 cm',
        year: '2017',
      },
    ],
  },
  hedge: {
    title: 'Irene Habegger | Hedge',
    imgs: [
      {
        title: 'Hedge',
        src: hedge01,
        technique: 'oil on canvas',
        size: '58 x 45 cm, 70 x 50 cm, 70 x 50, 50 x 50 cm',
        year: '2017',
      },
      {
        title: 'Hedge',
        src: hedge08,
        technique: 'oil on canvas',
        size: '58 x 45 cm',
        year: '2017',
      },
      {
        title: 'Hedge',
        src: hedge05,
        technique: 'oil on canvas',
        size: '70 x 50 cm',
        year: '2017',
      },
      {
        title: 'Hedge',
        src: hedge06,
        technique: 'oil on canvas',
        size: '70 x 50 cm',
        year: '2017',
      },
      {
        title: 'Hedge',
        src: hedge07,
        technique: 'oil on canvas',
        size: '50 x 50 cm',
        year: '2017',
      },
      {
        title: 'Hedge',
        src: hedge03,
        technique: 'oil on canvas',
        size: '40 x 40 cm',
        year: '2017',
      },
    ],
  },
  inTheMorningLight: {
    title: 'Irene Habegger | In the morning light',
    imgs: [
      {
        title: 'Offering',
        src: object01a,
        technique: 'oil on canvas',
        size: '55 x 50 cm',
        year: '2015',
      },
      {
        title: 'Blue',
        src: object01,
        technique: 'oil on canvas',
        size: '50 x 50 cm',
        year: '2016',
      },
      {
        title: 'Object on the Wall',
        src: object05,
        technique: 'oil on canvas',
        size: '34 x 45 cm',
        year: '2015',
      },
      {
        title: 'Unnamed',
        src: object06,
        technique: 'oil on canvas',
        size: '70 x 45 cm',
        year: '2015',
      },
      {
        title: 'Unnamed',
        src: object08,
        technique: 'oil on canvas',
        size: '48 x 38 cm',
        year: '2015',
      },
      {
        title: 'The way',
        src: object12,
        technique: 'oil on canvas',
        size: '90 x 50 cm',
        year: '2014',
      },
    ],
  },
  skinAndStone: {
    title: 'Irene Habegger | Skin and stone',
    imgs: [
      {
        title: 'Skin and stone',
        src: skinAndStown,
        technique: 'oil on canvas',
        size: '150 x 200 cm',
        year: '2017',
      },
      {
        title: 'Bark',
        src: bark,
        technique: 'oil on canvas',
        size: '150 x 200 cm',
        year: '2016',
      },
    ],
  },
}

export default appData
export const {
  hedge,
  portraits,
  skinAndStone,
  wall,
} = appData
