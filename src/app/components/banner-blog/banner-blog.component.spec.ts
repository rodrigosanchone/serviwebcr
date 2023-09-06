import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBlogComponent } from './banner-blog.component';

describe('BannerBlogComponent', () => {
  let component: BannerBlogComponent;
  let fixture: ComponentFixture<BannerBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerBlogComponent]
    });
    fixture = TestBed.createComponent(BannerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
