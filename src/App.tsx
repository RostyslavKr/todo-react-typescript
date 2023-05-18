import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { TodoProvider } from "./utils/context";



 export const App =()=> {
   return (
     <TodoProvider>
       <Layout>
      <div>
        <AppBar />
        <TaskForm />
      </div>
      <TaskList/>
      
     </Layout>
     </TodoProvider>
   )
}