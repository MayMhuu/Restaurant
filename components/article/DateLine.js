import moment from 'moment'

export default function DateLine({ data }) {
 
  const Date = (date) => {
    return (<span className="font-bold ">{moment(date).format('MMMM d, YYYY')}</span>) 
  };

  return (
    <>
      <p className='italic'>Published {Date(data.publishdate && data.publishdate)}</p>
      <p className='italic'>Updated  {Date(data.publishdate && data.lastupdated)}</p>
    </>
  );
}


