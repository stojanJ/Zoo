function AnimalList() {
    const items = [
        { id: 1, vrsta: 'Zec', ime: 'Mile', dateOfBirth: new Date().toDateString() },
        { id: 2, vrsta: 'Zaba', ime: 'Vasko', dateOfBirth: new Date().toDateString() },
        { id: 3, vrsta: 'Mis', ime: 'Gile', dateOfBirth: new Date().toDateString() },
        { id: 4, vrsta: 'Puz', ime: 'Zile', dateOfBirth: new Date().toDateString() },
        { id: 5, vrsta: 'Ker', ime: 'Cile', dateOfBirth: new Date().toDateString() },
    ];

    return (
        <div>
            <h1>Animal list:</h1>

            <table>
                <tr>
                    <th>broj</th>
                    <th>vrsta</th>
                    <th>ime</th>
                    <th>datum rodjenja</th>
                </tr>
                {items.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.vrsta}</td>
                        <td>{item.ime}</td>
                        <td>{item.dateOfBirth}</td>
                    </tr>

                ))}
            </table>

        </div>
    );
}

export default AnimalList