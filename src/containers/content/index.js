import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cat from "../../components/cat";
import AppController from "../../controllers/app";
import { catsSelector, allCatsSelector } from "../../store/selectors/appSelector";

export default function Content() {
    const [loadMore, setLoadMore] = useState(1);
    const allCats = useSelector(allCatsSelector, shallowEqual);
    const cats = useSelector(catsSelector, shallowEqual);
    const {catId} = useParams();

    const limit = 10;

    const handleLoadMore = () => {
      setLoadMore((more) => more + 1)
      catId ? AppController.getCatsWithCategory(loadMore, limit, catId) : 
        AppController.getAllCatsData(loadMore, limit);
    }

    useEffect(() => {
      catId ? AppController.getCatsWithCategory(loadMore, limit, catId) : 
        AppController.getAllCatsData(loadMore, limit);
    }, []);

    return (
        <div className="content">
          {
            allCats ? 
            <div className="cats">
                {allCats?.map((cat) => (
                    <Cat
                        width={cat.width}
                        height={cat.height}
                        image={cat.url}
                        key={cat.id}
                    />
                ))}
            </div>:
            <div className="cats">
                {cats?.map((cat) => (
                    <Cat
                        width={cat.width}
                        height={cat.height}
                        image={cat.url}
                        key={cat.id}
                    />
                ))}
            </div>
          }
            <div className="load-more">
                <button onClick={handleLoadMore}>Load more</button>
            </div>
        </div>
    );
}
