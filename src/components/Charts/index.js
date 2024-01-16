import numeral from 'numeral';
import ChartCard from './ChartCard';
import Field from './Field';
import WaterWave from './WaterWave';

const yuan = val => `&yen; ${numeral(val).format('0,0')}`;

export {
  yuan,
  ChartCard,
  Field,
  WaterWave,
};
