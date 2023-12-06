import { Entity } from "@backstage/catalog-model";
import { DocsBuildStrategy } from "@backstage/plugin-techdocs-node";
import { Logger } from "winston";

export class AnnotationBasedBuildStrategy implements DocsBuildStrategy {
    private readonly logger: Logger;

    constructor(options: { logger: Logger }) {
        this.logger = options.logger;
    }

    async shouldBuild(params: { entity: Entity; }): Promise<boolean> {
        const annotation = params.entity.metadata.annotations?.['company.com/techdocs-builder'] || "default";
        const shouldBuild = annotation !== 'external';
        this.logger.info(`AnnotationBasedBuildStrategy: shouldBuild? '${annotation}' -> ${shouldBuild}`);
        return shouldBuild;
    }

}