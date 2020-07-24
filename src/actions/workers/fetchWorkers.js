export const FETCH_WORKERS_REQ = "FETCH_WORKERS_REQ";
export const FETCH_WORKERS_SUCC = "FETCH_WORKERS_SUCC";

const fetchWorkers = () => {
  console.log(0); /*Здесь консоль отрабатывает*/
  return (dispatch) => {
    console.log(1); /*А вот здесь уже НЕТ*/
    dispatch({
      type: FETCH_WORKERS_REQ,
      payload: {
        wait: true,
      },
    });

    let act = async () => {
      try {
        let response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
        let data = await response.json();

        dispatch({
          type: FETCH_WORKERS_SUCC,
          payload: {
            wait: false,
            workers: data,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    act();
  };
};

export default fetchWorkers;
