const Placeholder = () => {
  return (
    <div className="editor-placeholder">
      <br />
      <h1 className="placeholder-title">
        Welcome to Wolfpad - an interactive coding environment.
      </h1>
      <br />
      <h3 className="placeholder-info">
        You can write Javascript, see it executed, and write comprehensive
        documentation using built in markdown editor.
      </h3>

      <br />
      <ul className="placeholder-list">
        <li>
          The code in each code editor is all joined together into one file. If
          you define a variable in cell #1, you can refer to it in any following
          cell!
        </li>
        <li>
          You can show any React component, string, number, or anything else by
          calling the <i className="gradient_text">&lt; show &gt;</i> function.
          This is a function built into this environment. Call{' '}
          <i className="gradient_text">&lt; show &gt;</i> multiple times to show
          multiple values
        </li>
        <li>Re-order or delete cells using the buttons on the top right</li>
        <li>Add new cells by hovering on the divider between each cell</li>
      </ul>
      <p className="placeholder-note">Click to write</p>
    </div>
  );
};

export default Placeholder;
