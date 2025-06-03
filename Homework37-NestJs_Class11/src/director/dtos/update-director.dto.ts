import { PartialType } from '@nestjs/swagger';

import { CreateDirectorDto } from './create-directorsdto';

export class UpdateDirectorDto extends PartialType(CreateDirectorDto) {}
