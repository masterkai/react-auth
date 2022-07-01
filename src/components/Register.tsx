export const Register = () => {
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your First name"
          />
          <label htmlFor="floatingInput">First Name</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your last name"
          />
          <label htmlFor="floatingInput">Last Name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password confirm"
          />
          <label htmlFor="floatingPassword">Password confirm</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          submit
        </button>
      </form>
    </main>
  );
};
