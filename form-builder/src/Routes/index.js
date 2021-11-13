import FormLandingView from '../Views/FormLandingView'
import ViewForm from '../Views/ViewForm'
import Form from "../Views/Form"
import EditForm from '../Views/EditForm';
import CreateForm from '../Views/CreateForm';

const layoutRoutes = [
    {path : "/forms", component:FormLandingView},
    {path : "/forms/add", component:CreateForm},
    {path : "/forms/edit/:id", component:EditForm},
    {path : "/forms/view/:id", component:ViewForm},
    {path : "/form/:id", component:Form},
];

export default layoutRoutes