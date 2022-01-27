import React, { useEffect, useState } from 'react';
import Widget from './components/Widget';
import NewWidgetForm from './components/NewWidgetForm';
import { getData } from './helpers/getData';
import './styles.css';

const App = () => {
  const [widgets, setWidgets] = useState([]);
  const [showWidgets, setShowWidgets] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateWidgets();
  }, []);

  const updateWidgets = () => {
    getData()
      .then((res) => {
        var parse = JSON.parse(res);
        setWidgets(parse);
        setShowWidgets(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  const addWidget = (widget) => {
    var tempWidgets = widgets.slice();
    tempWidgets.push(widget);
    setWidgets(tempWidgets);
  };

  const deleteWidget = (index) => {
    var tempWidgets = widgets.slice();
    tempWidgets.splice(index, 1);
    setWidgets(tempWidgets);
  };

  if (error) {
    return <h1>An error occurred, try again later</h1>;
  }

  return (
    <div className="App">
      <h1>Gallery Builder</h1>
      <NewWidgetForm addWidget={addWidget} />
      {showWidgets ? (
        <div>
          {widgets.map((widget, key) => {
            return (
              <Widget
                title={widget.title}
                description={widget.description}
                image={widget.image}
                id={key}
                deleteWidget={deleteWidget}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default App;
