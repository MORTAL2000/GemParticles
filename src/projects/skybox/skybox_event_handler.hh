/*************************************************************************
 * Copyright (c) 2016 Fran�ois Trudel
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
*************************************************************************/
#ifndef SKYBOX_EVENT_HANDLER_HH
#define SKYBOX_EVENT_HANDLER_HH

#include <memory>
#include "utils/graphic_contexts/graphic_context.hh"

namespace gem { namespace particle {
namespace skybox_project {
namespace event_handler {
void Init(const std::shared_ptr<GraphicContext>& a_pCtxt);
void Terminate();
void Update();
} /* namespace event_handler*/
} /* namespace skybox_project */
} /* namespace particle */
} /* namespace gem */

#endif /* end of include guard: SKYBOX_EVENT_HANDLER_HH */

