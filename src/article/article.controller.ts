import { User } from '@app/user/decorators/user.decorator';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { UserEntity } from '@app/user/user.entity';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/createArticle.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @User() currentUser: UserEntity,
    @Body('article') createArticleDto: CreateArticleDto,
  ): Promise<any> {
    return this.articleService.createArticle(currentUser, createArticleDto);
  }
}
