CREATE TABLE IF NOT EXISTS "snippet" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"description" text,
	"code" text NOT NULL,
	"language" text NOT NULL,
	"tags" text NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NOT NULL
);
--> statement-breakpoint
DROP TABLE "account";--> statement-breakpoint
DROP TABLE "session";--> statement-breakpoint
DROP TABLE "verificationToken";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "githubId" text;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "emailVerified";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "snippet" ADD CONSTRAINT "snippet_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
