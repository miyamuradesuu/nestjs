import { Transform, Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

// cho admin
export class CreateResumeDto {
    @IsNotEmpty({message: 'Email không đc để trống',})
    email: string;

    @IsNotEmpty({message: 'userId không đc để trống',})
    userId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({message: 'URL không đc để trống',})
    url: string;

    @IsNotEmpty({message: 'status không đc để trống',})
    status: string;
    
    @IsNotEmpty({message: 'companyId không đc để trống',})
    companyId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({message: 'jobId không đc để trống',})
    jobId: mongoose.Schema.Types.ObjectId;
}

export class CreateUserCvDto {
    @IsNotEmpty({message: 'URL không đc để trống',})
    url: string;

    @IsNotEmpty({ message: 'companyId không đc để trống', })
    @IsMongoId({ message: 'companyId is a mongo id', })
    companyId: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty({ message: 'jobId không đc để trống', })
    @IsMongoId({ message: 'jobId is a mongo id' })
    jobId: mongoose.Schema.Types.ObjectId;

}

