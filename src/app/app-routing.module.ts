import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { ContactComponent } from './contact/contact.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { FaqComponent } from './faq/faq.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { StoryListComponent } from './story-list/story-list.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: SideNavigationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'success', component: SuccessStoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'addStory', component: AddStoryComponent },
  { path: 'editStory', component: EditStoryComponent },
  { path: 'storyList', component: StoryListComponent },
  { path: '**', component: SideNavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
