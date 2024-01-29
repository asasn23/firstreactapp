import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: 'Books',
            icon: 'book',
            cards: [
                { id: 1, title: 'Pani Jeziora' },
                { id: 2, title: 'Chrzest Ognia' }
            ]
        },

        {
            id: 2,
            title: 'Movies',
            icon: 'film',
            cards: [
                { id: 1, title: '8. Mila' },
                { id: 2, title: 'Bohemian Rhapsody' }
            ]
        },

        {
            id: 3,
            title: 'Games',
            icon: 'gamepad',
            cards: [
                { id: 1, title: 'Monster Hunter' },
                { id: 2, title: 'World of Warcraft' }
            ]
        }
    ]);

    const addColumn = NewColumn => {
        setColumns([...columns, { id: shortid(), title: NewColumn.title, icon:NewColumn.icon,cards: []}]);
    };

    const addCard = (newCard, columnId) => {
        const columnsUpdated = columns.map(column => {
            if(column.id === columnId)
                return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
            else
                return column
        })

        setColumns(columnsUpdated);
    };

    return(
        <div className={styles.list}>
            <header className = {styles.header}>
                <h2 className={styles.title}>Things to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} addCart={addCard} />)}
            </section>
            <ColumnForm action={addColumn}/>
        </div>
    );
}

export default List;