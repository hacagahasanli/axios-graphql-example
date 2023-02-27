const Characters = ({ characters, style }) => {
  return (
    <>
      <div {...{ style }}>
        <h2 style={{ textAlign: "center" }}>Characters</h2>
        {characters?.map(({ id, name, status, species, gender }) => {
          return (
            <ul key={id}>
              <li>{name}</li>
              <li>{status}</li>
              <li>{species}</li>
              <li>{gender}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
