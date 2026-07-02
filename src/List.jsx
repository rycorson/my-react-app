import PropTypes from 'prop-types';

function List({category = "Category", items = []}) {

    //const category = props.category;
    //const itemList = props.items;

    /*const fruits = [{id: 1, name: 'Apple', calories: 95}, 
                    {id: 2, name: 'Banana', calories: 105}, 
                    {id: 3, name: 'Cherry', calories: 80}, 
                    {id: 4, name: 'Date', calories: 110}, 
                    {id: 5, name: 'Elderberry', calories: 90}];*/

    //itemList.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    //itemList.sort((a, b) => b.name.localeCompare(a.name)); //Reverse alphabetical order
    //itemList.sort((a, b) => a.calories - b.calories); //Numeric
    //itemList.sort((a, b) => b.calories - a.calories); //Reverse numeric

    //const lowCalitemList = itemList.filter(item => item.calories < 100); // Filter for itemList with less than 100 calories
    //const highCalitemList = itemList.filter(item => item.calories >= 100); // Filter for itemList with more than 100 calories

    const listItems = items.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b> calories</li>);

    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
};

export default List;