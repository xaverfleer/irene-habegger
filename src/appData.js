import bowlAndStone from '../static/img/black-02-Schale-und-Stein.jpg'
import bark from '../static/img/black-03-Rinde.jpg'
import unnamed from '../static/img/black-04-No-name.jpg'
import portrait01Mike from '../static/img/portrait-01-Mike.jpg'
import portrait02Sascha from '../static/img/portrait-02-Sascha.jpg'

const appData = {
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
    ],
  },
}

export default appData
export const { blackSeries } = appData
export const { portraits } = appData
