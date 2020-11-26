import bowlAndStone from '../static/img/black-02-Schale-und-Stein.jpg'
import bark from '../static/img/black-03-Rinde.jpg'
import portrait01Mike from '../static/img/portrait-01-Mike.jpg'
import portrait02Sascha from '../static/img/portrait-02-Sascha.jpg'
import portrait03Selin from '../static/img/portrait-03-Selin.jpg'
import portrait04Joel from '../static/img/portrait-04-Joel.jpg'
import portrait08Floyd from '../static/img/portrait-08-Floyd.jpg'
import portrait09MarcoII from '../static/img/portrait-09-Marco-II.jpg'
import portrait10Xaver from '../static/img/portrait-10-Xaver.jpg'
import unnamed from '../static/img/black-04-No-name.jpg'
import wall01 from '../static/img/wall-01.jpg'
import wall02 from '../static/img/wall-02.jpg'
import wall03 from '../static/img/wall-03.jpg'
import wall04 from '../static/img/wall-04.jpg'

const appData = {
  walls: {
    title: 'Irene Habegger | Walls',
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
      {
        title: 'Wall 4',
        src: wall04,
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
  hedges: {
    title: 'Irene Habegger | Hedges',
    imgs: [
      {
        title: 'Bowl and stone',
        src: bowlAndStone,
        technique: 'oil on canvas',
        size: '150 x 200 cm',
        year: '2017',
      },
    ],
  },
  blackSeries: {
    title: 'Irene Habegger | Black series',
    imgs: [
      {
        title: 'Bowl and stone',
        src: bowlAndStone,
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
      {
        title: 'Unnamed',
        src: unnamed,
        technique: 'oil on canvas',
        size: '150 x 200 cm',
        year: '2017',
      },
    ],
  },
}

export default appData
export const { walls } = appData
export const { blackSeries } = appData
export const { portraits } = appData
