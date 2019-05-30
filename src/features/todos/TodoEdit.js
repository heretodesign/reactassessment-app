import React from 'react'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const TodoEdit = () => {
  return (
    <>
      <section className="is-paddingless-horizontal has-background-primary">
          <div className="container">
              <div className="content">
                  <p className="subtitle is-6 has-text-white isdata">Edit Todo</p>
               </div>
          </div>
      </section>
    </>
  );

}
export default TodoEdit;
