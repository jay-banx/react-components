import React, { Component } from "react";

import "./ShuffleColors.css";

const WordColor = ({ label, color }) => {
  return <span style={{ color }}>{label}</span>;
};

class WordColorList extends Component {
  state = {
    wordColorList: [
      {
        id: 0,
        color: "red",
        label: "red",
      },
      {
        id: 1,
        color: "yellow",
        label: "yellow",
      },
      {
        id: 2,
        color: "green",
        label: "green",
      },
      {
        id: 3,
        color: "blue",
        label: "blue",
      },
      {
        id: 4,
        color: "purple",
        label: "purple",
      },
    ],
  };

  onShuffleColors = () => {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    const { wordColorList } = this.state;
    const colors = wordColorList.map(({ color }) => color);
    const shuffleColors = shuffle(colors);
    const newWordColorList = wordColorList.map(({ id, label }, index) => ({
      id,
      color: shuffleColors[index],
      label,
    }));

    this.setState(() => ({ wordColorList: newWordColorList }));
  };

  render() {
    const { wordColorList } = this.state;
    return (
      <div className="word-color-list">
        {wordColorList.map(({ id, label, color }) => {
          return <WordColor key={id} label={label} color={color} />;
        })}
        <button onClick={this.onShuffleColors}>Shuffle</button>
      </div>
    );
  }
}

const ShuffleColors = () => {
  return <WordColorList />;
};

export default ShuffleColors;
