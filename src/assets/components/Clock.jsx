import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      console.log(2);
    }, 1000);
    return () => {
      return clearInterval(interval);
    };
  }, []);

  return <p className="clock">{format(time, 'hh:mm:ss a')}</p>;
}

export default Clock;
