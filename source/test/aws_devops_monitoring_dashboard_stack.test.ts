// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {DevOpsDashboardStack} from '../lib/aws_devops_monitoring_dashboard_stack';
import {SynthUtils} from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';

const SOLUTION_ID = 'SO0143';
const SOLUTION_NAME = 'AWS DevOps Monitoring Dashboard'
const DIST_VERSION = 'v1.0.0'
const DIST_OUTPUT_BUCKET = 'devops_dashboard_test_bucket'
const DIST_SOLUTION_NAME = 'aws_devops_monitoring_dashboard'
const SOLUTION_TRADEMARKEDNAME = 'aws_devops_monitoring_dashboard'
const LAMBDA_RUNTIME_NODEJS = lambda.Runtime.NODEJS_14_X

/*
 * Snapshot test for devopsDashboardStack
 */
test('Snapshot test for primary devopsDashboardStack', () => {
  const app = new cdk.App();
  const stack = new DevOpsDashboardStack(app, 'DevopsDashboardStack', {
    description: `(${SOLUTION_ID})${SOLUTION_NAME}  - Main Template. Version: ${DIST_VERSION}`,
    solutionId: SOLUTION_ID,
    solutionVersion: DIST_VERSION,
    solutionName: SOLUTION_NAME,
    solutionDistBucket: DIST_OUTPUT_BUCKET,
    solutionDistName: DIST_SOLUTION_NAME,
    lambdaRuntimeNode: LAMBDA_RUNTIME_NODEJS,
  });
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});