import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomepageComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'user',
    component: UserComponent
  },
  { path: 'feedback',
    component: FeedbackComponent
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  },
  { path: '',
    component: HomepageComponent
  },
  { path: '**',
  component: PagenotfoundComponent
    }
];
export default appRoutes;