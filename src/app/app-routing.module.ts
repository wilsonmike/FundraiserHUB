import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from './add-story/add-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { StoryListComponent } from './story-list/story-list.component';

const routes: Routes = [
  { path: 'addStory', component: AddStoryComponent },
  { path: 'editStory', component: EditStoryComponent },
  { path: 'storyList', component: StoryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
