import { useEffect, useState } from "react";
import { getBooks } from "../utils/localStorage";
import PropTypes from 'prop-types';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#0088FE', '#00C49F', '#FFBB28'];

const PageToRead = () => {
  const [books, setBooks] = useState([]);

  

  useEffect(() => {
    const storedBooks = getBooks();
    
    setBooks(storedBooks);
  }, []);

  console.log(books);

  const data = books;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  

  return (
    <div className="mt-20 max-md:overflow-x-scroll lg:flex items-center justify-center ">
      <BarChart
        width={1500}
        height={600}
        data={data}
        
      >
        <CartesianGrid strokeDasharray="8 2" />
        <XAxis className="text-base" dataKey="bookName" />
        <YAxis  />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

PageToRead.propTypes = {
    TriangleBar: PropTypes.func
  };

export default PageToRead;
